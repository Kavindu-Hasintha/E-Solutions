import Form from "react-bootstrap/Form";
import "./EmailSend.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApiPath } from "../../API/ApiPath";
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

function EmailSend() {
  const [data, setData] = useState({
    From: "",
    To: "",
    Subject: "",
    Body: "",
  });

  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
    // console.log(name,value)
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      data.Subject.length === 0 ||
      data.Body.length === 0 ||
      data.To.length === 0 ||
      data.From.length === 0
    ) {
      toast("Please Fill All Columns");
      setError(true);
      return;
    }

    if (!isEmail(data.From)) {
      toast("Please Fill Sender Mail");
      setError(true);
      return;
    }

    if (!isEmail(data.To)) {
      toast("Please Fill Recievers Mail");
      setError(true);
      return;
    }

    try {
      const response = await fetch(ApiPath.API_URL + "email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: data.From,
          to: data.To,
          subject: data.Subject,
          body: data.Body,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email.");
      }

      toast.success("Email sent successfully.");
      setData({
        From: "",
        To: "",
        Subject: "",
        Body: "",
      });
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
      toast.error("Failed to send email.");
    }
  };

  return (
    <Form>
      <ToastContainer position="top-center" />
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>From</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@gmail.com"
          onChange={changeHandler}
          value={data.From}
          name="From"
        />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput2">
        <Form.Label>To</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@gmail.com"
          onChange={changeHandler}
          value={data.To}
          name="To"
        />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput3">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          onChange={changeHandler}
          value={data.Subject}
          name="Subject"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder=""
          onChange={changeHandler}
          value={data.Body}
          name="Body"
        />
      </Form.Group>
      <Button variant="success" onClick={submitHandler}>
        Send
      </Button>
    </Form>
  );
}

export default EmailSend;
