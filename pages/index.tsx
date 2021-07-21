import Link from "next/link"
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'



export default function IndexPage() {
   

  return (
    <div>
    <Link href="/users">
      <a>Go to Users page</a>
    </Link>
  </div>
  )
}

IndexPage.layout = "Home";