// ExampleComponent.jsx

export default function ExampleComponent() {
  return (
    <div className="p-8 bg-white shadow rounded-xl border">
      <h1 className="mb-4 text-2xl font-bold">Pixelated UI</h1>
      <p>
        This container uses a <code>clip-path</code> to create pixel–stepped corners.
      </p>
      {/* If you need an image also rendered in a pixelated way, add Tailwind’s class: */}
      <img
        className="mt-4 image-rendering-pixelated"
        src="/path/to/your/image.png"
        alt="Pixelated"
      />
    </div>
  );
}
