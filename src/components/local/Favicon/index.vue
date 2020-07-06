<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
export default {
	functional: true,
	props: {
		isNotified: Boolean
	},
	render(h: Function, context: any): any {
		const faviconType = context.props.isNotified ? 'notified' : 'regular'
		const timeHash = new Date().getTime().toString()
		const head = document.getElementsByTagName('head')[0]
		const favicon = document.querySelector('link[rel*="icon"]') as Element
		if (favicon) head.removeChild(favicon)
		const link = document.createElement('link')
		link.type = 'image/x-icon'
		link.rel = 'shortcut icon'
		link.id = 'notified-favicon'
		link.href = '/common/Images/current/master/favicon/'
			.concat(faviconType)
			.concat('/favicon.ico?=')
			.concat(timeHash)
		head.appendChild(link)
		return false
	}
}
</script>
