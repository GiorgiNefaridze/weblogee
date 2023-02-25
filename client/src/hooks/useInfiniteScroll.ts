import { useState } from "react";

interface IProps {
  (): { infiniteScroll: (containerReference: any) => void; page: number };
}

const useInfiniteScroll: IProps = () => {
  const [page, setPage] = useState<number>(0);

  const infiniteScroll = (containerReference: any) => {
    const conatiner = containerReference?.target;

    if (
      conatiner &&
      conatiner?.scrollTop + conatiner?.offsetHeight >
        conatiner?.scrollHeight - 1
    ) {
      setPage(page + 5);
    }
  };

  return { infiniteScroll, page };
};

export default useInfiniteScroll;
