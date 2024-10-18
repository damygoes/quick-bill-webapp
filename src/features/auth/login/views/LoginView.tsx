import LoginForm from '../components/LoginForm';

const LoginView = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full lg:flex-row">
      <div className="flex items-center justify-center w-full h-full">
        <LoginForm />
      </div>
      <div className="hidden w-full lg:flex lg:items-center lg:justify-center bg-background">
        <img
          src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNjb3VudGluZ3xlbnwwfHwwfHx8Mg%3D%3D"
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </section>
  );
};

export default LoginView;
