import { useDeleteWishedBookMutation, useEditWishedBookMutation } from "../redux/features/wishListSlice";
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { toast } from "./ui/use-toast";


export default function WishedCart({book}) {
  const {title, author, id, genre, isRead} = book;
  const [deleteWishedBook] = useDeleteWishedBookMutation();
  const [editWishedBook] = useEditWishedBookMutation()

  const deleteHandle = (id)=> {
    deleteWishedBook(id)
    toast({
      title: 'Book Deleted from Wishlist',
    });
  }

  const handleReadChange = (readStatus)=> {
    editWishedBook({
      id: id,
      data: {isRead: readStatus}
    })
    toast({
      title: 'Read Status Changed',
    });
  }

  return (
    <tr>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              {title}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
              {author}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
              {genre}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
              <Checkbox onCheckedChange={()=> handleReadChange(!isRead)} checked={isRead}/>
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
              <Button onClick={()=> deleteHandle(id)} variant="default">Delete</Button>
            </td>
          </tr>
  )
}
