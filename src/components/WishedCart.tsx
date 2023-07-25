/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useDeleteWishedBookMutation, useEditWishedBookMutation } from "../redux/features/wishListSlice";
import { IWishBook } from "./types/globalTypes";
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { toast } from "./ui/use-toast";

interface IProps {
  book: IWishBook;
}

export default function WishedCart({book}:IProps) {
  const {title, author, _id, genre, isRead} = book;
  const [deleteWishedBook] = useDeleteWishedBookMutation();
  const [editWishedBook] = useEditWishedBookMutation()

  const deleteHandle = async (id:string)=> {
    const checkAgain = window.confirm('Are you sure to delete this book?')
    if(checkAgain){
      await deleteWishedBook(id)
      toast({
      title: 'Book Deleted from Wishlist',
    });
    }
  }

  const handleReadChange = async (readStatus:boolean)=> {
    await editWishedBook({
      id: _id,
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
              <Button onClick={()=> deleteHandle(_id!)} variant="default">Delete</Button>
            </td>
          </tr>
  )
}
