import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace ICertificate {
  /**
   * 자격증/수료증 렌더링을 위한 Payload 타입입니다.
   *
   * @example payload/certificate.ts
   */
  export interface Payload extends ICommon.Payload {
    /** 자격증 목록 */
    list: Item[];
  }

  export interface Item {
    /** 자격증 명 */
    title: string;

    /** 발급 기관 */
    issuer: string;

    /**
     * 취득일
     * @format YYYY-MM
     * @example "2024-06"
     */
    acquiredAt: string;

    /**
     * 만료일 (없으면 만료 없음)
     * @format YYYY-MM
     * @example "2026-06"
     */
    expiresAt?: string;

    /** 증명/자격 번호 */
    credentialId?: string;

    /** 증명 링크 (검증/발급 페이지) */
    credentialUrl?: string;

    /** 추가 설명 */
    descriptions?: IRow.Description[];
  }
}
