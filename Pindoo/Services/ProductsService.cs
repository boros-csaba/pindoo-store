using Pindoo.Models;

namespace Pindoo.Services
{
    public interface IProductsService
    {
        List<Product> GetProducts();
    }

    public class ProductsService : IProductsService
    {
        private static List<Product> products = 
            [
                new () 
                {
                    Id = 1,
                    Name = "Napi rutin tábla",
                    Description = "Egyedi, kézzel készített napi rutin tábla",
                    Price = 8900,
                    ImageFileName = "rutin-tabla.png"
                },
                new ()
                {
                    Id = 2,
                    Name = "Napi rutin tábla",
                    Description = "Egyedi, kézzel készített napi rutin tábla",
                    Price = 8900,
                    ImageFileName = "hozzataplalas.png"
                },
                new ()
                {
                    Id = 3,
                    Name = "Napi rutin tábla",
                    Description = "Egyedi, kézzel készített napi rutin tábla",
                    Price = 8900,
                    ImageFileName = "hozzataplalas.png"
                },
                new ()
                {
                    Id = 4,
                    Name = "Napi rutin tábla",
                    Description = "Egyedi, kézzel készített napi rutin tábla",
                    Price = 8900,
                    ImageFileName = "hozzataplalas.png"
                },
                new ()
                {
                    Id = 5,
                    Name = "Napi rutin tábla",
                    Description = "Egyedi, kézzel készített napi rutin tábla",
                    Price = 8900,
                    ImageFileName = "hozzataplalas.png"
                }
            ];

        public List<Product> GetProducts()
        {
            return products;
        }
    }
}
