
import React, { useState } from 'react'
import { Container, Form, Button, Card } from "react-bootstrap"
export default function TextForm() {
    const [text, setText] = useState("Enter Text");
    const [color, setColor] = useState("black");
    const handleUppercase = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }
    const handleLowercase = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }
    const handlePrint = () => {
        if (text !== "") {
            let openWindow = window.open('');
            openWindow.document.write(`<pre style="color:${color};">`);
            openWindow.document.write(text);
            openWindow.document.write('</pre >');
            openWindow.print();
        }

    }

    const handleClear = (e) => {
        setText("");
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    return (
        <div>
            <Container className='text-start'>

                <h1>Enter Text To Analyze</h1>
                <Form>
                    <Form.Control as="textarea" style={{ minHeight: "120px" }} value={text} onChange={(e) => setText(e.target.value)} />
                </Form>
                <Button variant='outline-primary' className='my-4' onClick={handleUppercase}>Uppercase</Button>
                <Button variant='outline-success' className='my-4 mx-2' onClick={handleLowercase}>Lowercase</Button>
                <Button variant='outline-danger' className='my-4 mx-2' onClick={handleClear}>Clear Box</Button>
                <Button variant='outline-warning' className='my-4 mx-2' onClick={handleSpaces}>Remove Spaces</Button>
                <Button variant='outline-dark' className='my-4 mx-2'>
                    <input type="color" onChange={handleColor} />
                </Button>
            </Container>
            <Container className='text-start'>
                <h3>Text Summery</h3>
                <p>Words: <b>{text.split(" ").length}</b> & Characters: <b>{text.length}</b></p>
                <p>{Math.floor(0.008 * text.split(" ").length * 60)} Seconds to read</p>
            </Container>
            <Container className='text-start my-2'>
                <Card>
                    <Card.Header>Preview</Card.Header>
                    <Card.Body id="preview"><pre style={{ color: color }}>{text}</pre></Card.Body>
                    <Card.Footer>
                        <Button variant='outline-dark' onClick={handlePrint}>Print</Button>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    )
}
