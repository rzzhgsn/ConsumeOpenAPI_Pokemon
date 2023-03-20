using Microsoft.AspNetCore.Mvc;

namespace Client.Controllers;

public class TestCoresController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
