using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Pindoo.Models;
using Pindoo.Services;

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

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
