export default function Footer() {
  return (
    <footer className={"body body-3 max-w-screen-xl p-5 w-full mx-auto"}>
      <div className={"max-w-screen-lg mx-auto"}>
        Copyright © {new Date().getFullYear()} Louis Cuvelier
      </div>
    </footer>
  );
}
