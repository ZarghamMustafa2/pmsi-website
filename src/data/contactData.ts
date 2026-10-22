export const PMSI_CONTACT = {
  organizationName: 'Pakistan Minorities Support Initiative (PMSI)',
  whatsappNumber: '+92 307 9661669',
  whatsappRaw: '923079661669',
  whatsappPrefilledMessage:
    'Hello PMSI, I would like to learn more about your humanitarian initiatives and partnership opportunities.',
  get whatsappLink(): string {
    return `https://wa.me/${this.whatsappRaw}?text=${encodeURIComponent(this.whatsappPrefilledMessage)}`;
  },
};
