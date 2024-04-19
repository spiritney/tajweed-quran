<script lang="ts">
	import '$lib/style/index.css';

	import { addTajweed } from '$lib/functions/addTajweed';
	import {
		alTachkieel,
		el7roufAlAbjadiyaWithoutelYaa,
		el7roufElEst3laa,
		kasra,
		taf5imErraaClassName
	} from '$lib/constants';
</script>

<main>
	<h1>تفخم الراء في الأحوال التالية:</h1>

	<p>
		إذا كانت مفتوحة، ...مثل: ({@html addTajweed(`رَحمة`)}) أو مشددة مثل: ({@html addTajweed(
			`الرَّاشدون`
		)}).
	</p>
	<hr />

	<p>
		إذا كانت مضمومة، مثل: ({@html addTajweed(`رُمّان`)}) _ ({@html addTajweed(`رُزقوا`)}) _ ({@html addTajweed(
			`الرُّكَّع`
		)}).
	</p>

	<hr />

	<p>إذا كانت ساكنة بعد ضم،... مثل: ({@html addTajweed(`غُرْفة`)}).</p>

	<hr />

	<p>إذا كانت ساكنة بعد فتح،... مثل: ({@html addTajweed(`قَرْية`)}).</p>

	<hr />

	<p>
		إذا كانت ساكنة بعد كسر عارض،... مثل: ({@html addTajweed(`ارْجعوا`)} _ {@html addTajweed(
			`أمِ ارْتابوا`
		)}).
	</p>

	<hr />

	<p>
		إذا كانت ساكنة بعد كسر أصلي وأتى بعدها حرف استعلاء في كلمة واحدة... مثل: ({@html addTajweed(
			`قِرْطاس`
		)}

		_ {@html addTajweed(`مِرْصاداً`)}

		-- _ {@html addTajweed(`مِرْطا`)}
		_ {@html addTajweed(`مِرْضا`)}
		_ {@html addTajweed(`مِرْصا`)}
		_ {@html addTajweed(`مِرْظا`)}
		_ {@html addTajweed(`مِرْقا`)}
		_ {@html addTajweed(`مِرْغا`)}
		_ {@html addTajweed(`مِرْخا`)}

		).
	</p>

	<hr />

	<p>
		إذا كانت ساكنة بعد سكون غير الياء،... مثل: ({@html addTajweed(`الأمُورْ`)} _ {@html addTajweed(
			`القَدْرْ`
		)}).
	</p>
	<hr />

	<p>هذا المثال ليس فيه تشكيل</p>
	{#each el7roufAlAbjadiyaWithoutelYaa as el, index}
		<span style="padding-right: 0.5cm"
			>{el}{''}<span class={taf5imErraaClassName}>رْ</span>
			{index !== el7roufAlAbjadiyaWithoutelYaa.length - 1 ? '،' : ''}
		</span>
	{/each}

	<hr />

	<p>هذا المثال بالتشكيل</p>
	{#each el7roufAlAbjadiyaWithoutelYaa as el, index}
		{#each alTachkieel as tachkeel}
			<span style="padding-right: 0.5cm"
				>{el}{tachkeel}<span class={taf5imErraaClassName}>رْ</span>
				{index !== el7roufAlAbjadiyaWithoutelYaa.length - 1 ? '،' : ''}
			</span>
		{/each}
	{/each}
	<hr />

	<p>إذا كانت ساكنة وما قبلها كسر أصلي وما بعدها حرف استعلاء غير مكسور في كلمة</p>

	{#each el7roufAlAbjadiyaWithoutelYaa as el7arf, index}
		{#each el7roufElEst3laa as el7arfElEst3laa}
			{#each alTachkieel.filter((tachkeel) => tachkeel !== kasra) as tachkeel}
				<span style="padding-right: 0.5cm">
					{el7arf}{kasra}<span class={taf5imErraaClassName}>رْ</span>{el7arfElEst3laa}{tachkeel}
					{index !== el7roufAlAbjadiyaWithoutelYaa.length - 1 ? '،' : ''}
				</span>
			{/each}
		{/each}
	{/each}
</main>

<style>
	main {
		direction: rtl;
		font-size: 2cm;
		width: 100% !important;
		padding-right: 1cm;
	}
</style>
