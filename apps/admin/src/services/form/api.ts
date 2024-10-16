import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type {
  ApprovalStatus,
  ExportExcelType,
  FormListType,
  FormListSortingType,
} from '@/types/form/client';
import type {
  GetFormDetail,
  GetFormListRes,
  GetFormURLRes,
  PatchSecondRoundResultReq,
} from '@/types/form/remote';

export const getFormList = async (
  formListType: FormListType,
  formListSortingType: FormListSortingType
) => {
  if (formListType === '검토해야 하는 원서 모아보기') {
    const { data } = await maru.get<GetFormListRes>('/form/review', authorization());
    return data;
  }

  if (formListType === '정렬') {
    const params = new URLSearchParams();

    if (formListSortingType.status) params.append('status', formListSortingType.status);
    if (formListSortingType.type) params.append('type', formListSortingType.type);
    if (formListSortingType.sort) params.append('sort', formListSortingType.sort);

    const queryString = params.toString();
    const url = `/form${`?${queryString}`}`;
    const { data } = await maru.get<GetFormListRes>(url, authorization());
    return data;
  }

  const { data } = await maru.get<GetFormListRes>('/form', authorization());
  return data;
};

export const getSecondScoreFormat = async () => {
  const { data } = await maru.get('/form/second-round/format', {
    ...authorization(),
    responseType: 'blob',
  });

  return data;
};

export const patchSecondScoreFormat = async (formData: FormData) => {
  const { data } = await maru.patch(
    '/form/second-round/score',
    formData,
    authorization.FormData()
  );

  return data;
};

const EXPORT_EXCEL_TYPE: Record<ExportExcelType, string> = {
  '전체 내보내기': 'result',
  '1차 전형 결과': 'first-round',
  '2차 전형 결과': 'second-round',
  '최종 합격자': 'final-passed',
} as const;

export const getExportExcel = async (exportExcelType: ExportExcelType) => {
  const { data } = await maru.get(`/form/xlsx/${EXPORT_EXCEL_TYPE[exportExcelType]}`, {
    ...authorization(),
    responseType: 'blob',
  });

  return data;
};

export const patchSecondRoundResult = async (
  secondRoundResultData: PatchSecondRoundResultReq
) => {
  const { data } = await maru.patch(
    '/form/second-round/result',
    secondRoundResultData,
    authorization()
  );

  return data;
};

export const patchSecondScoreResultAuto = async () => {
  const { data } = await maru.patch('/form/second-round/select', null, authorization());

  return data;
};

export const getFormDetail = async (id: number) => {
  const { data } = await maru.get<GetFormDetail>(`/form/${id}`, authorization());

  return data;
};

export const patchFinalScore = async (id: number, status: ApprovalStatus) => {
  if (status === '반려') {
    const { data } = await maru.patch(`/form/${id}/reject`, {}, authorization());

    return data;
  } else if (status === '확인 중') {
    const { data } = await maru.patch(`/form/${id}/approve`, {}, authorization());

    return data;
  }
  const { data } = await maru.patch(`/form/${id}/receive`, {}, authorization());

  return data;
};

export const getFormUrl = async (formIdList: number[]) => {
  const { data } = await maru.get<GetFormURLRes>(
    `/form/form-url?id-list=${formIdList.join('%2C')}`,
    authorization()
  );

  return data;
};
