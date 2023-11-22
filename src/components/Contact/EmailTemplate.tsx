import { IContactForm } from "@/interfaces/IContact";
import { FC } from "react";

export const EmailTemplate: FC<Readonly<IContactForm>> = ({
  name,
  email,
  subject,
}) => (
  <div
    style={{
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#333",
    }}
  >
    <div
      style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}
    >
      <h1 style={{ fontSize: "24px", margin: "0 0 10px 0" }}>
        Detalles del Contacto
      </h1>
      <p style={{ fontSize: "18px", margin: "0 0 5px 0" }}>
        <strong>Nombre:</strong> {name}
      </p>
      <p style={{ fontSize: "18px", margin: "0 0 5px 0" }}>
        <strong>Correo:</strong> {email}
      </p>
      <p style={{ fontSize: "18px", margin: "0 0 5px 0" }}>
        <strong>Asunto:</strong>
      </p>
      <p style={{ fontSize: "18px", margin: "0 0 5px 0" }}>{subject}</p>
    </div>
  </div>
);
