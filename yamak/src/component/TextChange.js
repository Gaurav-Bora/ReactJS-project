import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TextChange() {
  return (
    <Form style={{ margin: "10px" }}>
      <btn style={{margin:'5px'}}>
        <Button variant="light">B</Button> <Button variant="light">I</Button>{" "}
        <Button variant="light">hyperlink</Button>{" "}
        <Button variant="light">text cut</Button>{" "}
        <Button variant="light">underline</Button>{" "}
        <Button variant="light">underline</Button>{" "}
      </btn>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default TextChange;
