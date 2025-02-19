using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Pindoo.Models;
using Pindoo.Services;
using Stripe.Checkout;

namespace Pindoo.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProductsService _productsService;
        private readonly ILogger<HomeController> _logger;

        public HomeController(IProductsService productsService, ILogger<HomeController> logger)
        {
            _productsService = productsService;
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.CartItemCount = 123;
            return View(_productsService.GetProducts());
        }

        [HttpPost("add-to-cart/{productId}")]
        public IActionResult AddToCart(int productId)
        {
            var cart = HttpContext.Session.Get<Cart>("cart") ?? new Cart();
            if (!cart.Items.ContainsKey(productId))
            {
                cart.Items[productId] = 0;
            }
            cart.Items[productId]++;
            HttpContext.Session.Set("cart", cart);
            return Ok(cart);
        }

        [HttpGet("kosar")]
        public IActionResult Kosar()
        {
            var cart = HttpContext.Session.Get<Cart>("cart") ?? new Cart();
            var cartViewModel = new CartViewModel();
            var products = _productsService.GetProducts();
            foreach (var (productId, quantity) in cart.Items)
            {
                var product = products.Single(p => p.Id == productId);
                cartViewModel.Items.Add(new CartViewModel.CartItem
                {
                    ProductId = productId,
                    ProductName = product.Name,
                    Quantity = quantity,
                    Price = product.Price,
                    ImageFileName = product.ImageFileName
                });
            }
            return View(cartViewModel);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost("fizetes")]
        public IActionResult Pay()
        {
            var cart = HttpContext.Session.Get<Cart>("cart") ?? new Cart();
            if (cart.Items.Count == 0)
            {
                // todo error handling
                return RedirectToAction("Kosar");
            }

            var domain = "https://pindoo.hu";
            var options = new SessionCreateOptions
            {
                // todo
                SuccessUrl = $"{domain}/rendeles-igazolas",
                CancelUrl = $"{domain}/kosar",
                Mode = "payment",
                PaymentMethodTypes = ["card"],
                CustomerEmail = "boros.csaba94@gmail.com", //todo
                LineItems = [.. cart.Items.Select(i => new SessionLineItemOptions
                {
                    PriceData = new SessionLineItemPriceDataOptions 
                    {
                        UnitAmount = 1200000, //todo
                        Currency = "huf",
                        ProductData = new SessionLineItemPriceDataProductDataOptions 
                        {
                            Name = "Napi rutin tábla", // todo
                        }
                    },
                    Quantity = i.Value
                })]
            };

            var service = new SessionService();
            var session = service.Create(options);
            return Redirect(session.Url);
        }
    }
}
