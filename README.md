# React Hook Form + Zod in Next.js Project

This project demonstrates the usage of **React Hook Form** and **Zod** for form validation in a **Next.js** JavaScript application. It walks through four key steps of implementing form validation, starting from basic validation to more advanced server-side validation.

## Project Overview

The project progresses through four commits that demonstrate different stages of integrating form validation:

1. **Basic Validation** (Without any libraries)
2. **Using React Hook Form** (Form handling and validation)
3. **Using Zod for Schema Validation with React Hook Form**
4. **Server-side Validation with Zod** (Validation on both client and server)

## Commits Breakdown

### 1. **Commit 1: Basic Validation (Without Any Libraries)**

In the first commit, I implemented basic form validation without using any external libraries. This serves as the most fundamental approach where validation was manually handled within the form component itself.

- **Objective**: Implement simple form validation checks like required fields, email validation, etc.
- **Features**:
  - No external libraries for validation.
  - Manual checks and error handling for form inputs.

### 2. **Commit 2: Using React Hook Form**

In the second commit, I introduced **React Hook Form** to handle form state management and validation. React Hook Form simplifies the process of handling forms by minimizing re-renders and providing built-in methods to register inputs, handle errors, and manage the form state.

- **Objective**: Demonstrate form handling with React Hook Form.
- **Features**:
  - Form inputs are managed using `useForm`.
  - Error handling and form submission are handled by React Hook Form.
  - No external schema validation (just basic inline checks).

### 3. **Commit 3: Using Zod for Schema Validation with React Hook Form**

The third commit integrates **Zod** for schema-based form validation with React Hook Form. Zod provides a more declarative approach to validation, ensuring that form data conforms to specific rules.

- **Objective**: Add **Zod** schema validation to the form.
- **Features**:
  - Zod schema is used to validate form inputs, such as requiring certain fields and validating email formats.
  - Integration of `@hookform/resolvers/zod` to connect Zod with React Hook Form for seamless validation.
  - Enhanced error handling with custom validation messages.

### 4. **Commit 4: Server-side Validation with Zod**

In the final commit, I extended the Zod validation to the server side, making sure that the data is validated both client-side (via React Hook Form) and server-side (when the data is submitted to the backend).

- **Objective**: Demonstrate server-side validation using the same **Zod** schema.
- **Features**:
  - Zod schema is used for validation on the server to ensure that the submitted data matches the expected format.
  - Validation is applied both on the client (during form submission) and on the server (when the data is processed).
  - This ensures consistency and reduces the chances of invalid data being processed.

## Installation

To get started with this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/devupendra/react-hook-form-with-zode
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the project.

## Usage

### Basic Form Validation

In the initial stage, the form handles validation through manual checks on each field.

### React Hook Form

In the second stage, form management is handled by **React Hook Form**, with validation managed using the built-in `useForm` hook. Errors are displayed based on React Hook Form’s state.

### Zod Schema Validation

In the third stage, **Zod** is used to define validation rules in a declarative way. React Hook Form integrates with Zod using the `@hookform/resolvers/zod` resolver to validate form inputs.

### Server-side Validation

The final stage demonstrates how the same Zod validation schema used in the client-side form can be applied on the server. This ensures that only valid data is processed, and validation occurs both on the client (before submission) and the server (during submission).

## Conclusion

This project illustrates the power and flexibility of combining **React Hook Form** with **Zod** for both client-side and server-side form validation. By leveraging these libraries, developers can build efficient, validated forms that are both user-friendly and secure.
