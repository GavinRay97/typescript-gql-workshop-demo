import Link from "next/link"

import AppLayout from "../components/AppLayout"

export default function IndexPage() {
  return (
    <div>
    <Link href="/users">
      <a>Go to Users page</a>
    </Link>
  </div>
  )
}

IndexPage.getLayout = page => <AppLayout>{page}</AppLayout>;