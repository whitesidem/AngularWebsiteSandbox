using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SandboxApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Mick's home page here";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Mick's about page";

            return View();
        }

        public ActionResult Angular()
        {
            ViewBag.Message = "Mick's angular directives page";
            return View();
        }
    }
}
