import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = {
  email: "",
  password: "",
  terms: false,
};

const errorMessages = {
  email: "Geçerli bir email giriniz!",
  password: "Şifre en az 8 karakter, 1 büyük harf ve 1 rakam içermeli!",
};

export default function Login() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  useEffect(() => {
    const newErrors = {};

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = errorMessages.email;
    }

    // Password regex
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(form.password)) {
      newErrors.password = errorMessages.password;
    }

    setErrors(newErrors);
    setIsValid(
      Object.keys(newErrors).length === 0 && form.terms
    );
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    navigate("/success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <input
        data-cy="input-email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && (
        <p data-cy="error-message">{errors.email}</p>
      )}

      <input
        data-cy="input-password"
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      {errors.password && (
        <p data-cy="error-message">{errors.password}</p>
      )}

      <label>
        <input
          data-cy="input-terms"
          type="checkbox"
          name="terms"
          checked={form.terms}
          onChange={handleChange}
        />
        Şartları kabul ediyorum
      </label>

      <button
        data-cy="btn-submit"
        type="submit"
        disabled={!isValid}
      >
        Sign In
      </button>
    </form>
  );
}
