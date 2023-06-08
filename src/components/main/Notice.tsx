import { color } from "@/styles/color";
import { font } from "@/styles/font";
import RightArrowIcon from "@/components/common/Icon/RightArrow";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from "@/components/common/Link";
import { useMainNoticeListQuery } from "@/services/main/queries";
import NoticeItem from "./items/NoticeItem";

const Notice = () => {
  const router = useRouter();
  const { data } = useMainNoticeListQuery();

  return (
    <StyledNotice>
      <Link onClick={() => router.push("/notice")} gap="8px">
        <Title>공지사항</Title>
        <RightArrowIcon color={color.gray900} size={22} />
      </Link>
      <NoticeList>
        {data.map((item) => (
          <NoticeItem key={item.id} id={item.id} title={item.title} />
        ))}
      </NoticeList>
    </StyledNotice>
  );
};

export default Notice;

const StyledNotice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 48%;
  height: 33%;
`;

const Title = styled.p`
  ${font.H3}
  color: ${color.gray900};
`;

const NoticeList = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
