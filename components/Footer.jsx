export function Footer() {
  return (
    <span className="text-sm">
      by {' '}
      <a href="https://jvk.to" target="_blank">John Valai</a>💫
      {' '}
      ©{new Date().getFullYear()}
    </span>
  );
}