// components/ui/LoadingPage.tsx

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="h-16 w-16 animate-spin rounded-full border-b-4 border-t-4 border-primary"></div>
    </div>
  );
}
