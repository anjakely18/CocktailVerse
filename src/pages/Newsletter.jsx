import axios from "axios";
import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation;
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form" method="POST">
        <h3 className="title">Our newsletter</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            last name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-input"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="btn">
          {isSubmitting ? "submitting..." : "submit"}
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Libre Baskerville", serif;
  text-transform: capitalize;

  .title {
    margin-bottom: 3rem;
  }

  .form {
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 3rem;
    margin: 3rem auto;
    border: solid 4px var(--color-primary);
  }

  .form-row {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
  }

  .btn {
    width: 100%;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 1.5rem; /* Réduire la taille du titre sur les écrans moyens */
    }

    .form-input {
      font-size: 0.9rem; /* Réduire la taille du texte dans les inputs */
    }

    .btn {
      font-size: 0.9rem; /* Réduire la taille du texte dans le bouton */
    }
  }

  @media screen and (max-width: 480px) {
    .title {
      font-size: 1.2rem; /* Réduire encore plus la taille du titre sur les petits écrans */
    }

    .form-input {
      padding: 0.5rem; /* Réduire le padding des inputs */
      font-size: 0.8rem; /* Réduire encore plus la taille du texte dans les inputs */
    }

    .btn {
      padding: 0.5rem 1rem; /* Réduire le padding du bouton */
      font-size: 0.8rem; /* Réduire encore plus la taille du texte dans le bouton */
    }

    .form {
      width: 100%;
    }
  }
`;

export default Newsletter;
