import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <div className="text-center bg-gradient-to-r from-[#E0FFD8] from-17% via-[#95FED8] via-53% to-[#C9FFBC] to-85%">
        <nav className="container mx-auto pt-8">
          <div className="flex justify-between">
            <h1 className="logo">Contri.</h1>

            <div className="flex gap-6">
              <Link href="#">Join Waitlist</Link>
            </div>
          </div>
        </nav>

        <div className="py-[130px]">
          <p className="mb-6 text-3xl md:text-5xl md:w-[750px] mx-auto font-bold hero-font">
            Simplify Shared Expenses with Contri.
          </p>
          <p className="md:text-lg w-[70%] md:w-[450px] mx-auto text-slate-700">
            Say goodbye to the hassle of splitting costs among friends and
            family.
          </p>

          <div className="flex gap-6 mt-10 justify-center">
            <Link
              href="#"
              className="bg-orange-700 hover:bg-orange-600 p-2 rounded px-6 text-white"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-20">
        <h2 className="text-3xl text-center font-semibold mb-10">
          How Contri Works
        </h2>

        <div>
          <div className="grid md:grid-cols-2 md:gap-10 mb-14">
            <img
              src="/img/create-group.png"
              alt="Create a Group"
              className="rounded-lg"
            />
            <div className="md:pt-10">
              <h3 className="text-lg font-semibold mt-4">Create a Group</h3>
              <p className="text-slate-500">
                Start by creating a group for your friends or family.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-10 mb-14">
            <img
              src="/img/invite-friend.png"
              alt="Invite your Friends to Group"
              className="rounded-lg block md:hidden"
            />
            <div className="md:pt-10">
              <h3 className="text-lg font-semibold mt-4">Invite Friends</h3>
              <p className="text-slate-500">
                Invite friends to join your group and start sharing expenses.
              </p>
            </div>
            <img
              src="/img/invite-friend.png"
              alt="Invite your Friends to Group"
              className="rounded-lg hidden md:block"
            />
          </div>

          <div className="grid md:grid-cols-2 md:gap-10 mb-14">
            <img
              src="/img/track-expenses.png"
              alt="Track expenses"
              className="rounded-lg"
            />
            <div className="md:pt-10">
              <h3 className="text-lg font-semibold mt-4">Track Expense</h3>
              <p className="text-slate-500">
                Track expenses and see who owes what in your group and let
                Contri take care of the rest.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-10 text-center bg-green-100">
        <p className="font-semibold text-lg hero-font mb-1">Contri.</p>
        <small className="text-slate-400">
          Build with ❤️ by Sachin in India
        </small>
        <div className="mt-2">
          <Link
            href="#"
            className="text-sm text-green-700 hover:text-green-900 mr-4 underline"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-sm text-green-700 hover:text-green-900 mr-4 underline"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm text-green-700 hover:text-green-900 mr-4 underline"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm text-green-700 hover:text-green-900 mr-4 underline"
          >
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
}
