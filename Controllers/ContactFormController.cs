using MESProject.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Website.Controllers;

namespace MESProject.Controllers
{
	public class ContactFormController : SurfaceController
	{
		public ContactFormController(IUmbracoContextAccessor umbracoContextAccessor, IUmbracoDatabaseFactory databaseFactory, ServiceContext services, AppCaches appCaches, IProfilingLogger profilingLogger, IPublishedUrlProvider publishedUrlProvider) : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
		{
		}

        [HttpPost]
		[ValidateAntiForgeryToken]
        public ActionResult HandleContactForm(ContactFormViewModel model)
		{
			if (!ModelState.IsValid)
			{
				ModelState.AddModelError("Error", "Please check the form.");
				return PartialView("~/Views/Partials/Contact Form.cshtml", model);
			}

			return null;
		}
	}
}
