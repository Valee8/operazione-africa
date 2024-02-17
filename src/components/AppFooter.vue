<script >
export default {
    name: "AppFooter",
    data() {
        return {
            linksFooter: [
                {
                    text: "Donations",
                    //name: "home",
                },
                {
                    text: "Popular Causes",
                },
                {
                    text: "Upcoming Event",
                },
                {
                    text: "Latest Blog",
                },
                {
                    text: "Careers",
                },
                {
                    text: "Help",
                },
                {
                    text: "Privacy",
                },
            ]
        }
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <ul class="links-footer">
                <li v-for="(link, index) in linksFooter" :key="index">
                    <a href="/">
                        {{ link.text }}
                    </a>
                </li>
            </ul>

            <div class="copyright">
                &copy; 2024 Project Fede. All rights <div>reserved.</div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;

footer {
    padding-top: 150px;
    font-size: 1.25rem;
    color: #3D3D3D;

    .container {
        .links-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;

            li {
                font-weight: 500;

                a {
                    color: #3D3D3D;
                }
            }
        }

        .copyright {
            text-align: center;
            padding: 80px 0;
            font-weight: 300;
            line-height: 30px;
        }
    }
}
</style>
