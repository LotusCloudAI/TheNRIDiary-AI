import Link from "next/link";

export default function CategoryListPage() {
  const categories = ["general", "tech"];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      <div className="space-y-2">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/category/${cat}`}
            className="block text-blue-600 underline"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}