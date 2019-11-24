namespace Portfolio.Lambda.Model {
    public class Response {
        public static bool IsSuccess { get; set; }

        public Response(bool isSuccess) {
            IsSuccess = isSuccess;
        }
    }
}