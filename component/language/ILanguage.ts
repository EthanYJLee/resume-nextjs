import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace ILanguage {
  /**
   * 언어 섹션 렌더링을 위한 Payload 타입입니다.
   *
   * @example payload/language.ts
   */
  export interface Payload extends ICommon.Payload {
    /** 언어 목록 */
    list: Item[];
  }

  export interface Item {
    /** 언어명 (예: Korean, English) */
    title: string;

    /**
     * 날짜
     * 좌측 컬럼에 표시됩니다.
     */
    date: string;

    /**
     * 시험/자격증 명 (예: TOEIC, OPIc, JLPT)
     * 우측 subTitle로 표시됩니다.
     */
    certificate?: string;

    /**
     * 점수/등급 (예: 890, IH, N2)
     * 우측 subTitle로 표시됩니다.
     */
    score?: string;

    /**
     * 시험/프로젝트 사용 경험 등 추가 설명
     * 예: OPIc IH (2025-01), Technical writing, Meeting, ...
     */
    descriptions?: IRow.Description[];
  }
}
