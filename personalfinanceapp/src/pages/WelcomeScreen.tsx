import { Button } from "react-bootstrap";

function WelcomeScreen() {
  return (
      <>
          <div className="container">
              <h1>Welcome to the Personal Finance App!</h1>

              <p>
                  As someone who likes to keep track of what they&apos;re spending money on and how much they&apos;m saving, I thought I&apos;d build
                  this app. It&apos;s simple, visual, and helps me stay in control of my finances.
                  On top of that, I&apos;m new to TypeScript and wanted to use this project as a way to learn and get comfortable with it!
              </p>
              <p>
                  This application will allow you to put in incomes/outcomes, and it will calculate for you how much you are spending per
                  month, along with how much you are saving. 
              </p>
              <div className='button-wrapper'>
                  <Button variant="primary">Let's Get Started</Button>
              </div>
          </div>
      </>
  );
}

export default WelcomeScreen;