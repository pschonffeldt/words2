import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    // basic text input validation
    if (newText.includes("<script>")) {
      setWarningText("¡No se permiten etiquetas de secuencia de comandos!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("¡No se permite el símbolo @!");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Ingresa tu texto"
        spellCheck="false"
      />
      <Warning warningText={warningText} />
    </div>
  );
}
