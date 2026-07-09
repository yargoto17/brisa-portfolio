import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

export default function NotFoundPage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center gap-6 px-8 py-32 text-center">
        <h1 className="font-display text-[64px] text-black">Page not found</h1>
        <p className="font-body text-[20px] text-black">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-black bg-blue px-6 font-display text-[20px] text-white"
        >
          Back to Home
        </Link>
      </div>
    </PageLayout>
  );
}
