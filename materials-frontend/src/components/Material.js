function Material(props) {
  return (
    <>
      <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td class="px-6 py-3">{props.name}</td>
        <td class="px-6 py-3">{props.type}</td>
        <td class="px-6 py-3">{props.tags}</td>
        <td class="px-6 py-3">{props.amount}</td>
        <td class="px-6 py-3">{props.createdAt}</td>
        <td class="px-6 py-3">{props.updatedAt}</td>
      </tr>
    </>
  )
}

export default Material;