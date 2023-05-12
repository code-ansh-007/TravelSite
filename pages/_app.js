import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 3,
  color: "#3ecf21",
  className: "z-50",
  delay: 100,
});

// when the route starts to change then go ahead and start the progress bar npm package to show the green bar on the top of the screen to show the loading
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

// progress.start();

// setTimeout(() => {
//   progress.finish();
// }, 1000);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
