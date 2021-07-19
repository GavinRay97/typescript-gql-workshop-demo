import Link from "next/link"

export default function IndexPage() {
  return (
    <div>
      <Link href="/users">
        <a>Go to Users page</a>
      </Link>
    </div>
  )
}
