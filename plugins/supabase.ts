export default defineNuxtPlugin(async (nuxtApp) => {
  const { supabaseClient } = useSupabase()

  // Wait for Supabase to be ready
  await supabaseClient.auth.getSession()
})
