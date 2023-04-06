import { useState, useRef } from "react";
import _debounce from "lodash/debounce";

interface IProps {
  (): {
    infiniteScroll: (containerReference: any) => void;
    page: number;
    scrollRef: React.MutableRefObject<boolean>;
  };
}

const useInfiniteScroll: IProps = () => {
  const [page, setPage] = useState<number>(0);
  const scrollRef = useRef(false);

  const infiniteScroll = (containerReference: any) => {
    const conatiner = containerReference?.target;

    if (
      conatiner &&
      conatiner?.scrollTop + conatiner?.offsetHeight >
        conatiner?.scrollHeight - 1
    ) {
      setPage(page + 5);
      scrollRef.current = true;
    }

    if (
      conatiner &&
      conatiner?.scrollTop + conatiner?.offsetHeight <
        conatiner?.scrollHeight - 20
    ) {
      scrollRef.current = false;
    }
  };

  return { infiniteScroll, page, scrollRef };
};

export default useInfiniteScroll;
