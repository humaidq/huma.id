{ inputs, lib, ... }:
{
  imports = [ inputs.devshell.flakeModule ];
  perSystem =
    {
      config,
      pkgs,
      inputs',
      ...
    }:
    {
      devshells.default = {
        devshell = {
          name = "huma.id devshell";
          meta.description = "huma.id personal website development environment";
          packages =
            builtins.attrValues {
              inherit (pkgs)
                nodejs
                ;
            }
            ++ [
              inputs'.nix-fast-build.packages.default
              config.treefmt.build.wrapper
            ]
            ++ lib.attrValues config.treefmt.build.programs;
        };
      };
    };
}
