<script>
	import { page } from '$app/stores';
</script>

<header class="flex items-center justify-between gap-20 p-5 px-20 text-center font-till-warp">
	<h1 class="text-3xl">MC Tools</h1>

	<nav>
		<ul class="flex items-center justify-center gap-20 text-xl ">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="hover:underline">
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined} class="hover:underline">
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/gen' ? 'page' : undefined} class="hover:underline">
				<a href="/gen">Generators</a>
			</li>
			<li aria-current={$page.url.pathname === '/mods' ? 'page' : undefined} class="hover:underline">
				<a href="/mods">Mods</a>
			</li>
		</ul>
	</nav>
</header>
