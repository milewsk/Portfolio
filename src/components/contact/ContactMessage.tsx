import { Button } from "../ui/Button";
import { Textarea } from "../ui/textarea";

const ContactMessage = () => {
  return (
    <div className="contact-message mx-auto p-4 flex flex-col items-center justify-center h-full gap-2">
      <div className="flex flex-col items-center text-center mb-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact me</h1>
      <p className="mt-2 text-center">If you have any questions or need further information, please feel free to reach out down bellow.</p> 
      <p className="mt-2 text-center">We will get back to you as soon as possible.</p>
      </div>
      <Textarea
        className="mt-4 w-full max-w-md"
        placeholder="Type your message here..."
        rows={5}
        />
        <Button className="mt-2" variant="default">
          Send Message
        </Button>
    </div>
  );
}

export default ContactMessage;