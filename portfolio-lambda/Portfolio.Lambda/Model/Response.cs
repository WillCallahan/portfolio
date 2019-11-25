namespace Portfolio.Lambda.Model {
    public class Response {
        public bool IsSuccess { get; set; }

        public Response(bool isSuccess) {
            IsSuccess = isSuccess;
        }
    }
}