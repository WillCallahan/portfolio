using Portfolio.Lambda.Model;

namespace Portfolio.Lambda
{
    public interface IEmailService
    {
        void SendEmail(Request request, Context context);
    }
}
