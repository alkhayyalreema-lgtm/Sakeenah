
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SakeenahWeb.Models;

namespace SakeenahWeb.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        // Read language from cookies
        ViewData["Language"] = Request.Cookies["Language"] ?? "en";

        // Retrieve selected emotion from session
        ViewData["SelectedEmotion"] = HttpContext.Session.GetString("SelectedEmotion");

        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult SetLanguage(string language)
    {
        if (language != "en" && language != "ar")
        {
            return BadRequest("Invalid language");
        }

        CookieOptions options = new CookieOptions();
        options.Expires = DateTime.Now.AddDays(30);
        options.HttpOnly = true;
        options.IsEssential = true;

        Response.Cookies.Append("Language", language, options);

        return RedirectToAction("Index");
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult SelectEmotion(string emotion)
    {
        if (emotion != "sad" && emotion != "anxious" &&
            emotion != "grateful" && emotion != "happy")
        {
            return BadRequest("Invalid emotion");
        }

        // Save selected emotion in session
        HttpContext.Session.SetString("SelectedEmotion", emotion);

        return RedirectToAction("Index");
    }

    public IActionResult About()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel
        {
            RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier
        });
    }
}
