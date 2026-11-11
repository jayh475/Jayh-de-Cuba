export default function TermsAndPrivacy() {
  return (
    <p className="text-center text-sm text-gray-600">
      By creating an account you agree to the
      <a href="/terms-of-service" className="text-blue-600 hover:underline">
        {" "}
        Terms of Service{" "}
      </a>
      and acknowledge our
      <a href="/privacy-policy" className="text-blue-600 hover:underline">
        {" "}
        Privacy Policy
      </a>
      .
    </p>
  );
}
