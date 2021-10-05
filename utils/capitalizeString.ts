export default function capitalizeString (s: string) {
  return s ? s[0].toUpperCase() + s.slice(1) : s
}
