'use client'

export default function ContactInfo() {
  return (
    <div
      className="
      grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2
      gap-8 leading-[1.75]
      text-center sm:text-left
    ">
      <div>
        <h4 className="font-semibold text-[#F67769]">Location</h4>
        <p className="text-gray-800 font-normal">Kishinev, OR</p>
      </div>
      <div>
        <h4 className="font-semibold text-[#F67769]">Phone</h4>
        <p className="text-gray-800 font-normal">+373 68 940 997</p>
      </div>
      <div>
        <h4 className="font-semibold text-[#F67769]">Telegram</h4>
        <p className="text-gray-800 font-normal">@tanya_arbuz</p>
      </div>
      <div>
        <h4 className="font-semibold text-[#F67769]">E-mail</h4>
        <p className="text-[#455B84] font-normal">work.arbuz@gmail.com</p>
      </div>
    </div>
  )
}
