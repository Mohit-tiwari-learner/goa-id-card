/** Loads any user photo into an HTMLImageElement, converting HEIC when needed. */
export async function loadUserImage(file: File): Promise<HTMLImageElement> {
  let blob: Blob = file;
  const isHeic =
    /image\/hei[cf]/i.test(file.type) || /\.hei[cf]$/i.test(file.name);

  if (isHeic) {
    try {
      const heic2any = (await import("heic2any")).default;
      const out = await heic2any({ blob: file, toType: "image/jpeg", quality: 0.92 });
      blob = Array.isArray(out) ? (out[0] as Blob) : (out as Blob);
    } catch {
      // Some browsers (Safari) decode HEIC natively — fall through to the raw blob.
    }
  }

  const url = URL.createObjectURL(blob);
  try {
    return await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () =>
        reject(
          new Error(
            "We couldn't read that photo. Try a JPG or PNG export of the same image.",
          ),
        );
      img.src = url;
    });
  } finally {
    setTimeout(() => URL.revokeObjectURL(url), 20000);
  }
}
