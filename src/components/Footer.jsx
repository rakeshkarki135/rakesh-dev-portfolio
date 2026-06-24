import Link from "next/link";

const FooterComponent = () => {
  return (
    <footer className="">
      <div className="flex items-center gap-4 sm:justify-between mx-4 sm:mx-14 my-4">
        <h1 className="text-lg sm:text-2xl font-bold text-primary-container">
          DevPortfolio
        </h1>
        <p className="text-xs text-center sm:text-sm text-gray-400">
          © 2024 Developer Portfolio. Engineered with precision.
        </p>
        <div className="flex gap-2 sm:gap-15 text-xs sm:text-sm text-gray-400">
          <Link
            href="https://github.com/rakeshkarki135"
            target="_blank"
            className="hover:text-primary-container"
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/rakesh-karki-514527274/"
            target="_blank"
            className="hover:text-primary-container"
          >
            LinkedIn
          </Link>
          <Link
            href={""}
            target="_blank"
            className="hover:text-primary-container"
          >
            Twitter
          </Link>
          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRspGkqTTgFfKJQcvPwGfGvwMgBGFTVwJqLwTCwmZbjRhzcbNcMgMZPnPTqzdFgdKrWJVHQ"
            target="_blank"
            className="hover:text-primary-container"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
