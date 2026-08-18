/* ============================================================
 * config.js —— Supabase 云端配置
 *  · SUPABASE_URL   ：项目地址，形如 https://<20位ref>.supabase.co
 *                     来源：Supabase 控制台 → Project Settings(⚙) → API → Project URL
 *  · SUPABASE_ANON_KEY：publishable / anon key（可公开，写在客户端安全）
 *                     来源：同上页面 → Publishable key（或 anon/public key）
 *
 *  ⚠️ 当前为空：App 启动时进入「纯本地模式」，不会盲目连接无效域名。
 *  填法二选一：
 *   1) 直接在下面填入你【完整】的 URL 与 Key（见 docs/CONNECT.md 如何获取）；
 *   2) 或在 App 内「我的 → 云端状态 → 配置云端」里粘贴，会自动覆盖此处的空值。
 *  注意：之前提供的 key 为截断片段（结尾 yMQtDg0p 仅 8 字符、非 JWT），
 *        其对应项目在 DNS 中不存在，必须更换为完整有效的凭证。
 *  另外：首次使用前务必在 Supabase SQL Editor 执行 supabase/schema.sql
 *        （已含 family_members 的 INSERT 策略与 user_family_ids RPC）。
 * ============================================================ */
window.__APP_CONFIG__ = {
  SUPABASE_URL: 'https://kssbfqejrcldxrglkoiz.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_hknkOH0csBXh9w1UWKGSHw_yMQtDg0p'
};
