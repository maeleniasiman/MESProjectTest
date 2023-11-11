using System.ComponentModel.DataAnnotations;

namespace MESProject.ViewModels
{
	public class ContactFormViewModel
	{
		[Required]
		public string Name { get; set; }

		[Required]
		[EmailAddress(ErrorMessage = "Please enter a valid email address")]
		public string Email { get; set; }

		[Required]
		public string Comment { get; set; }

		[Required]
		public string Subject { get; set; }
	}
}
